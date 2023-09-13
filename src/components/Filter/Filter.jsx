import { Form,Section,Label,Input } from "./Filter.styled";
import React,{Component}from "react";


const FilterContact = ({value,onChange}) =>  {

 

    // handleChange = ({target:{value}}) => {
    //     console.log(value)
    // }


        return(
            <Section>
                <Form>
                <Label>Find contact by name</Label>
                <Input
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                required
                />
                </Form>
            </Section>
        )
    
}


export default FilterContact;