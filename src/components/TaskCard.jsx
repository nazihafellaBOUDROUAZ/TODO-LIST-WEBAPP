import React from "react";
import "./TaskCard.css";
import Tag from "./Tag.jsx"
import deleteIcon from "../assets/delete.png"
const tagStyle = {
    Critical: { backgroundColor: "#f08080" },       // Red
    Important: { backgroundColor: "#dda15e" },     // Peach
    Normal: { backgroundColor: "#d8f3dc" },        // Green
    Low_Priority: { backgroundColor: "#bde0fe" },  // Yellow
}
const TaskCard = ({ title, tags = [], handleDelete, index }) => {
    const filteredTags = tags.filter(tag => ['Critical', 'Important', 'Normal', 'Low_Priority'].includes(tag));
        const cardColor = filteredTags.length > 0 
      ? tagStyle[filteredTags[0]]?.backgroundColor || "white" 
      : "white";

    return (
        <article className="task_card"style={{backgroundColor:cardColor}} >
            <p className="task_text">{title}</p>
            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {
                        tags.map((tag, index) => (
                        <Tag key={index} tagName={tag} selected={true} />
                    ))
                    }
                </div>
                <div className="task_delete"
                onClick={() =>handleDelete(index)}>
                    <img src={deleteIcon} className="delete_icon" alt="" />
                </div>
            </div>
        </article>
    )
}
export default TaskCard;