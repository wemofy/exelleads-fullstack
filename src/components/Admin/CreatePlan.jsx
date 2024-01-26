import {React,useState} from 'react'
import { Button, Card, Checkbox, Label, TextInput, Toast } from 'flowbite-react';
import axios from '../../redux/app/customAxios';

import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';








const CreatePlan = () => {

    

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        searchQueriesPerDay: '',
        leadsPerDay: '',
        description:'',
      });

      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, 
            [id]: id === 'price' || id === 'leadsPerDay' || id ==='searchQueriesPerDay' ? Number(value) : value,

        
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
          const response = await axios.post('/plans', formData);
          console.log('Plan created successfully:', response.data);
          toast("Plan Created Succefully");
          setFormData({
            name: '',
            price: '',
            searchQueriesPerDay: '',
            leadsPerDay: '',
            description: '',
          });
         
            

        } catch (error) {
          console.error('Error creating plan:', error);
        }
      };


  return (
      <div className='flex flex-col p-10 '>
         <ToastContainer />
         <div className='heading text-2xl font-bold'>
            Add Plan
        </div>
        <div className='p-10'>
        <Card className="w-80">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="name" />
          </div>
          <TextInput id="name" type="text" placeholder="Free" required value={formData.name}
                onChange={handleInputChange}    />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput id="price" type="number" value={formData.price}
                onChange={handleInputChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="searchQueriesPerDay" value="searchQueriesPerDay" />
          </div>
          <TextInput id="searchQueriesPerDay" type="number" value={formData.searchQueriesPerDay}
                onChange={handleInputChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="leadsPerDay" value="leadsPerDay" />
          </div>
          <TextInput id="leadsPerDay" type="number"   value={formData.leadsPerDay}
                onChange={handleInputChange} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="description" />
          </div>
          <TextInput id="description" type="text"   value={formData.description}
                onChange={handleInputChange} required />
        </div>
        
       
        <Button type="submit">Submit</Button>
      </form>
    </Card>
</div>
        
        
        </div>
  )
}

export default CreatePlan