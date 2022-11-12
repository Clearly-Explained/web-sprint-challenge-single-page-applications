import React from 'react';


export default function Pizza(props){
    
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
   
    const onChange = evt => {
        const {name,value,checked,type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse);
    }

    return (
        <form className='form container' id='pizza-form' onSubmit={onSubmit}>
         <div className='form inputs' id='name-inputs'>
        
        <button id='order-button' disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.address}</div>
        </div>
      </div> 
            <div className='name-inputs'>
             <h1>Pizza Maker</h1>
             <h2> Contact Information</h2>
             <label>Name:
                 <input 
                 id='name-input'
                 name='name'
                 type='text'
                 value={values.name}
                 onChange={onChange}
                    />
             </label>
             <label>Email:
                 <input 
                 id='name-input'
                 name='email'
                 type='text'
                 value={values.email}
                 onChange={onChange}
                    />
             </label>
             <label>Address:
                 <input 
                 id='name-input'
                 name='address'
                 type='text'
                 value={values.address}
                 onChange={onChange}
                    />
             </label>

             <label>SpecialText:
                 <input 
                 type='text'
                 id='special-text'
                 name='specialText'
                 value={values.specialText}
                 onChange={onChange}
                    />
                </label>
             <label>
                Size:
            <select id="size-dropdown" name="size" value={values.dropdown} onChange={onChange}>
                    <option value=''>- Select a size -</option>
                    <option value='Kids'>Kids</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    

                </select>
                </label> 
        </div>
            <div className='toppings checkboxes'>
            <h2>Toppings</h2>


             <label>Bacon:
                 <input 
                 type='checkbox'
                 name='bacon'
                 value={values.bacon}
                 onChange={onChange}
                    />
             </label>

             <label>Pineapple:
                 <input 
                 type='checkbox'
                 name='pineapple'
                 value={values.pineapple}
                 onChange={onChange}
                    />
             </label>

             <label>Sardines:
                 <input 
                 type='checkbox'
                 name='sardines'
                 value={values.sardines}
                 onChange={onChange}
                    /> 
             </label>

             <label>Anchovies:
                 <input 
                 type='checkbox'
                 name='anchovies'
                 value={values.anchovies}
                 onChange={onChange}
                    />
                    
             </label>
         </div>
         
            </form>
        
        
    )
}