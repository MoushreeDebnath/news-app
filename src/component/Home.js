import { useState } from "react";
import News from "./News";

function Home() {
    const [category,setCategory] = useState({name:"Techcrunch",url:"http://localhost:3004/techcrunch"});
    const [categoryList, setCategoryList] = useState([{name:"TechCrunch",url:"http://localhost:3004/techcrunch"}]);
    const [formData, setFormData] = useState({name:"", url:""});
    const [count, setCount] = useState(1);

    //getting form data
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    //add category in list
    const addCategory = ()=>{
        const list = categoryList;
        list.push(formData);
        setCategoryList(list);
        console.log(categoryList);
        setCount(count+1);
        //console.log(count)
    }
    return (
        <>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {categoryList.map((item) => {
                    return (
                        <li className="nav-item" role="presentation" key={item.name}>
                        <button className={item.name === category.name?`nav-link active`:`nav-link`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>setCategory(item)}>{item.name}</button>
                    </li>
                    )
                })}
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={count>4}>+</button>
                </li>
            </ul>
            <News data={category}/>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">News Category</label>
                                    <input type="text" className="form-control" id="exampleInputCategory" aria-describedby="emailHelp" name="name" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">API</label>
                                    <input type="text" className="form-control" id="exampleInputApi" name="url" onChange={handleChange} />
                                </div>
                               
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addCategory}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;