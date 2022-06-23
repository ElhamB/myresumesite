import React from "react";
import './Progressbar.css'

const Progress = ({done,title}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 3000);
	
	return (
        <div className="mb-3">
           <span className="progress-con">
           <label>{title}</label><span>{done}%</span>
           </span>
            <div className="progress">
			<div className="progress-done" style={style}>	
			</div>
		</div>
        </div>
	
	)
}
export default Progress