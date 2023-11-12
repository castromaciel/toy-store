import { useState } from 'react'
import { SaveForm } from './SaveForm'
import { Preview } from './Preview'

const Sell = () => {
  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (data:any) => {
    setFormData(data)
  }

  return (
    <div className="container-fluid my-5">
      <h2 className="mb-5">Carga de Producto</h2>
      <div className="row">
        <div className="col-md-6">
          <SaveForm onFormSubmit={handleFormSubmit} formData={formData} />
        </div>
        <div className="col-md-6">
          {formData && <Preview data={formData} />}
        </div>
      </div>
    </div>
  )
}

export default Sell
