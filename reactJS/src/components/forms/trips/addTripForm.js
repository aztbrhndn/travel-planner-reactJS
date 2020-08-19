import React, { useEffect } from 'react';
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import { MyTextInput, DestinationInput } from './components';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Actions from "actions";
import { Button } from 'reactstrap';

function usePrevious(value) {
  const ref = React.useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// And now we can use these
const AddTripForm = props => {

  const prevGetGetAllData = usePrevious(props.getGetAllData);

  useEffect(() => {
    if (prevGetGetAllData 
      && prevGetGetAllData.isLoading 
      && !props.getGetAllData.isLoading) {
        window.location.replace('/dashboard');
    }
  }, [props.getGetAllData])

  return (
    <>
      <Formik
        initialValues={{
          // trip_name: '',
          // origin: '',
          // start_date: '',
          // end_date: '',
          // group_type: '',
          // trip_type: '',
          // users: [],
          destinations: [
            {
              location: '',
              start_date: '',
              end_date: '',
            }
          ], 
        }}
        validationSchema={Yup.object({
          // trip_name: Yup.string()
          //   .required('Required'),
          // origin: Yup.string()
          //   .required('Required'),
          // start_date: Yup.date()
          //   .min(new Date(), "Date cannot be in the past")
          //   .required('Required'),
          // end_date: Yup.date()
          //   .required('Required')
          //   .min(Yup.ref('start_date'), 'Must be after start date'),
          // users: Yup
          //   .array()
          //   .of(Yup.number())
          //   .strict()
          //   .required(),
          destinations: Yup.array()
            .of(
              Yup.object().shape({
                location: Yup.string().required('Required'),
                start_date: Yup.date()
                  .min(new Date(), 'Date cannot be in the past')
                  .required('Required'),
                end_date: Yup.date()
                  .min(Yup.ref('start_date'), 'Must be after start date')
                  .required('Required'),
              })
            )
            // .strict()
            .required('Please add a destination'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            props.onCreateTrip(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* {(formikProps) => ( */}
        {({ values, isSubmitting, ...formikProps }) => (
          <div
            style={{
              position: 'relative',
            }}
          >
            <h1>Create Trip</h1>
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* <MyTextInput
                label="trip name"
                name="trip_name"
              /> */}
              <FieldArray name="destinations">
                {({ insert, remove, push }) => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    { values.destinations.length > 0 &&
                    values.destinations.map((destination, index) => ( 
                      <div 
                        key={`destinations.${index}`}
                        style={{
                            position: 'relative',
                            padding: '1em',
                            margin: '1em',
                            border: '1px solid',
                            borderRadius: '1em',
                        }}
                    >
                        <ion-icon 
                            name="close-outline"
                            onClick={() => remove(index)}
                            size="large"
                            className="hover-pointer"
                            style={{
                                position: 'absolute',
                                right: '0.5em',
                                top: '0.4em',
                                cursor: 'pointer',
                            }}
                        ></ion-icon>

                        <MyTextInput 
                            name={`destinations[${index}].location`}
                            label="location"
                        />
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <MyTextInput 
                                name={`destinations.${index}.start_date`}
                                label="start date"
                                type="date"
                                containerStyle={{
                                    flex: 1,
                                }}
                            />
                            <MyTextInput 
                                name={`destinations.${index}.end_date`}
                                label="end date"
                                type="date"
                                containerStyle={{
                                    flex: 1,
                                }}
                            />
                        </div>
                    </div>
                    )) }
                  {typeof formikProps.errors.destinations === 'string' && (<div
                      style={{
                        color: 'red',
                      }}
                    >
                      <ErrorMessage name="destinations" />
                    </div>)}
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => push({ location: "", start_date: "", end_date: "" })}
                    >
                      Add Destination
                    </Button>
                  </div>
                )}
              </FieldArray>
              {/* <MyTextInput
                label="Origin"
                name="origin"
                type="text"
                placeholder="Enter origin here"
              />
              <MyTextInput
                label="Start Date"
                name="start_date"
                type="date"
                placeholder="Enter start date here"
              />
              <MyTextInput
                label="End Date"
                name="end_date"
                type="date"
                placeholder="Enter end date here"
              />
              <MyTextInput
                label="Group Type"
                name="group_type"
                type="text"
                placeholder="Enter group type here"
              />
              <MyTextInput
                label="Trip Type"
                name="trip_type"
                type="text"
                placeholder="Enter trip type here"
              /> */}
              <Button 
                type="submit"
                color="primary"
                disabled={isSubmitting}
                style={{
                  position: 'absolute',
                  right: '1em',
                  top: '0.5em',
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (store) => ({
  getCreateTripData: Actions.getCreateTripData(store),
  getGetAllData: Actions.getGetAllData(store),
})

const mapDispatchToProps = {
  onCreateTrip: Actions.createTrip,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTripForm);