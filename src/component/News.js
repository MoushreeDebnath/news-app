import React, { useEffect, useState } from "react";
function News(props) {

    const [newsObj, setNewsObj] = useState([])
    const getNews = async () => {
        const response = await fetch(props.data.url);
        const data = await response.json();
        console.log(data);
        setNewsObj(data)
    }
    useEffect(() => {
        getNews()
    }, [props.data.url])
    return (
        <>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    {
                        newsObj.map((item) => {
                            return (
                                <div className="card mb-3"  key={item.source.id}>
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text"><small className="text-muted">{item.author}</small></p>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <img src={item.urlToImage} className="img-fluid rounded-start" alt="news-img" />
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>9
                            <div className="col-md-4">
                                <img src="https://www.pexels.com/photo/landscape-of-rocky-snowcapped-mountains-16143559/" className="img-fluid rounded-start" alt="news-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src="https://www.pexels.com/photo/landscape-of-rocky-snowcapped-mountains-16143559/" className="img-fluid rounded-start" alt="news-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;