const BlogPost = ({title, children}) => {
    return(
        <div>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    )

}
export default BlogPost