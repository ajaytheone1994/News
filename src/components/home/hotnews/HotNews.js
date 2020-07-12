import React from 'react'
 
 

function HotNews(props) {
    const Recent = props.newsType;
    return (
        <div>
            <h3 style={{ color: '#FF1F3D' }}>{props.title}</h3>
            {
                Recent.map(post => {
                    return (

                        <div style={{ display: 'flex', flexWrap:'wrap' }}>
                            <div style={{ marginRight: '10px' }}><img src={require(`../../../assets/images/${post.blogImage}`)} height="70" />
                            </div>
                            <div>
                                <p style={{ margin: 'auto', color: '#F5B97D' }}>{post.blotTitle} </p>
                                <p style={{ margin: 'auto', color: '#6C6C6C' }}>{post.PostedON} </p>
                            </div>
                        </div>

                    )

                })
            }


        </div>
    )
}

export default HotNews;
