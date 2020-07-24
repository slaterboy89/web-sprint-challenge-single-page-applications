import React from 'react'

export default function Form(props){
    const { form, updateForm, handleSubmit, disable } = props;
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
            < input name = 'name' value={form.name} onChange = {updateForm}/>
            </label>
            <label>
                Size:
                <select name = 'size'value = {form.size} onChange = {updateForm}>
                    <option disabled value = "">
                        Select a Size
                    </option>
                    <option value='s'>Small</option>
                    <option value = 'm'>Medium</option>
                    <option value = 'l'>Large</option>
                    <option value = 'xl'>X-Large</option>
                </select>
            </label>
            <label> Pepperoni
                <input type = 'checkbox' name = 'pepperoni' checked = {form.pepperoni} onChange = {updateForm}/>
            </label>
            <label> Sausage
                <input type = 'checkbox' name = 'sausage' checked = {form.sausage} onChange = {updateForm}/>
            </label>
            <label> Cheese
                <input type = 'checkbox' name = 'cheese' checked = {form.cheese} onChange = {updateForm}/>
            </label>
            <label> Meat Lovers
                <input type = 'checkbox' name = 'meatlovers' checked = {form.meatlovers} onChange = {updateForm}/>
            </label>
            <label> Canadian Bacon
                <input type = 'checkbox' name = 'canadianbacon' checked = {form.canadianbacon} onChange = {updateForm}/>
            </label>
            <label> Buffalo Chicken
                <input type = 'checkbox' name = 'buffalochicken' checked = {form.buffalochicken} onChange = {updateForm}/>
            </label>
            <label>
                Special Instructions:
                <input type= 'text' name = 'instructions' value = {form.instructions} onChange = {updateForm}/>
            </label>
            <button disabled = {disable} type='submit'>Place Order</button>
        </form>
    )
}