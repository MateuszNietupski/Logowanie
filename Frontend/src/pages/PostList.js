import Grid from "@mui/material/Grid";
import React,{useEffect, useState} from "react";
import {Card, CardContent, Paper} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {ENDPOINTS} from "../utils/consts";
import Button from "@mui/material/Button";
import PostEditor from "../components/PostEditor";

const PostList = () => {
    console.log('Komponent PostList jest montowany');
    const [Posts,setPosts] = useState([])
    const { categoryId,subcategoryId } = useParams();
    
    useEffect(() => {
        console.log('Efekt zostanie uruchomiony');
        axios.get(ENDPOINTS.getForumPosts,{
            params: {subcategoryId}
        })
            .then(response => {
                setPosts(response.data)
            }).catch(err => {
                console.log('Blad pobierania danych', err)
        });
    }, [subcategoryId]);

    return(
        <Grid container spacing={2} styles={{margin: "20px"}}>
            {Posts ? (Posts.map((post) => (
                <Grid item xs={4}  key={post.id} button>
                    <Button 
                        component={Link}
                        to={`/forum/${categoryId}/subcategory/${subcategoryId}/post/${post.id}`}
                        >
                        <CardContent>
                            <Typography variant="h3" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography>
                                {post.date}
                            </Typography>
                            <Typography>
                                {post.content}
                            </Typography>
                        </CardContent>
                    </Button>
                </Grid>
                ))) : (
                    <p>Brak postów</p>
            )}
            <PostEditor/>
        </Grid>
        
    );
}

export default PostList;