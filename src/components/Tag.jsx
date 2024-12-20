import React from "react";
import"./tag.css";
const Tag = ({tagName, selectTag , selected }) => {
    const tagStyle = {
        Critical : {backgroundColor: "#FF0000"},
        Important :  {backgroundColor: "#bc6c25"},
        Normal :  {backgroundColor: "#b7e4c7"},
        Low_Priority :  {backgroundColor: "#a2d2ff"},
        Work_Professional :  {backgroundColor: "#51375C"},
        Personal :  {backgroundColor: "#BDE0FE"},
        Household :  {backgroundColor: "#CDB4DB"},
        Social :  {backgroundColor: "#F0E6EF"},
        default :  {backgroundColor: "lightgray"},
    
    }
    return(
        <button
         type="button"
         className="tag "
         style = {selected ? tagStyle[tagName] : tagStyle.default}
          onClick={ () => selectTag(tagName)}>
        {tagName}
        </button>
        );
}
export default Tag;