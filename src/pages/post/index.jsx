import React, {useEffect, useState} from "react";
import styles from './styles.module.css'
import {useParams} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


const PostPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        (async () => {
            try{
                setIsLoading(true)
                const data = await getPost(id)
                setPost(data)
            } catch (e){

            }finally {
                setIsLoading(false)
            }

        })()
    },[])

    const getPost = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        return data
    }
    if (!post) {
        return (
            <div>
                no result
            </div>
        )
    }
    if (isLoading) {
        return (
            <div>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }

            return (
                <div className={styles.container}>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {post.id}
            </Typography>
            <Typography variant="h5" component="div">
                {post.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {post.body}
            </Typography>
            <Typography variant="body2">
            well meaning and kindly.
            <br />
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
                </div>

            )

}
export default PostPage