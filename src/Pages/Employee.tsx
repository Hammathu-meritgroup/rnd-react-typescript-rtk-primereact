import { Customer, CustomerGetApiArg, useCustomerGetAllQuery, useCustomerGetQuery } from "../Services/codeGenApis/CustomerApi"
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from "react";
import { enhancedApi as api } from "../Services/codeGenApis/CustomerApi";
import { RootState, AppDispatch } from '../Store/store'
import { useAppDispatch, useTypedSelector } from '../Store/store'
import { Formik, Form } from 'formik'
import FormikControl from "../components/formikContainer/FormikControl";

function Employee() {

  const { data = [], error, isLoading, isFetching, isError } = useCustomerGetAllQuery()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenAddDialog, setIsOpenAddDialog] = useState<boolean>(false)
  const [selectedEmpId, setSelecedEmpId] = useState<CustomerGetApiArg>({ id: 0 })
  const dispatch = useAppDispatch();
  const OpenEmployeeDialog = (id: number) => {
    setSelecedEmpId({ id })
    setIsOpen((id > 0))
    /*
     dispatch( api.endpoints.customerGet.initiate({id}))
                .then((data)=>{console.log(data); }
              ) 
    */
  }

  const CloseEmployeeDialog = () => {
    setIsOpen(false);
    setSelecedEmpId({ id: 0 });
  }

  const imageBodyTemplate = (selectedRow: any) => {

    return <i className="pi pi-pencil"
      onClick={() => OpenEmployeeDialog(selectedRow.id)} aria-label="s"></i>
  }


  return (
    <div>
      <div className="content-header">
        <h1 className="m-0">Employees 
        <Button icon="pi pi-plus" className="p-button-rounded p-button-text " onClick={() => setIsOpenAddDialog(true)} aria-label="Show" />
        </h1>

      </div>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Employees</h3>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fas fa-minus" /></button>
              <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fas fa-times" /></button>
            </div>
          </div>
          <div className="card-body p-0">          
          {
            isError ? <div>An error has occurred{JSON.stringify(error)} !</div>
              :
              isLoading ? <div>Loading...</div>
                : (
                  <div >
                    <DataTable value={data} size="small" responsiveLayout="scroll">
                      <Column field="id" header="Id"></Column>
                      <Column field="email" header="Email"></Column>
                      <Column field="contactNumber" header="ContactNumber"></Column>
                      <Column field="alternateContactNumber" header="AlternateContactNumber"></Column>
                      <Column field="createdBy" header="CreatedBy"></Column>
                      <Column header="Action" body={imageBodyTemplate}></Column>
                    </DataTable>
                    {
                      (selectedEmpId?.id != 0) &&
                      <EmployeeDetail id={selectedEmpId} isVisible={isOpen} close={CloseEmployeeDialog}></EmployeeDetail>
                    }

                    {/* <Dialog visible={isOpen} onHide={() => setIsOpen(false)}>
                    <EmployeeDetail id={selectedEmpId.id}></EmployeeDetail>
                    </Dialog> */}
                  </div>
                )
          }
        
          </div>
        </div>
        
        <Dialog header="New Employee" visible={isOpenAddDialog} onHide={() => setIsOpenAddDialog(false)}>
          <div style={{ margin: '5px' }}>
            <EmployeeAdd></EmployeeAdd>
          </div>
        </Dialog>

      </section>
    </div>
  )
}
type EmployeeDetailProps = {
  id: CustomerGetApiArg,
  isVisible: boolean,
  close: () => void;
}

export const EmployeeDetail = (props: EmployeeDetailProps) => {
  const { data } = useCustomerGetQuery(props.id);
  const [isVisible, setVisible] = useState<boolean>(false)

  const onclose = () => {
    setVisible(false)
    props.close();
  }
  const onOpenmodel = useEffect(() => {
    setVisible(props.isVisible);
  }, [props])

  return (<>
    <Dialog visible={isVisible} onHide={onclose}>
      <div className="row">
        <b className="col">{data?.email}</b>
        <b className="col">{data?.contactNumber}</b>
        <b className="col">{data?.alternateContactNumber}</b>
        <b className="col">{data?.createdBy}</b>
      </div>
    </Dialog>

  </>
  )
}

export const EmployeeAdd = () => {
  const initialValues = {
    name: '',
    email: ''
  }
  const onSubmit = (values: any) => {
    debugger;
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <div className="p-fluid grid">
            <FormikControl
              control='input'
              // type='email'
              label='Email'
              name='email'

            />
            <FormikControl
              control='input'
              label='Name'
              name='name'

            />
          </div>
          <button className="btn-sm btn-primary" type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default Employee


