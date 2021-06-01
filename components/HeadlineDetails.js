import React from 'react'
import { Text, Image, ScrollView } from 'react-native'
import {HeadlineDetailsTitle, HeadlineDetailsTitleContainer, HeadlineDetailsAuthor,
HeadlineDetailsDateAndSource, HeadlineDetailsDivider, HeadlineDetailsContent} from'./StyledComponents/HeadlineDetailsStyledComponent'
import Moment from 'react-moment'

const HeadlineDetails = (props) => {
    const {route}= props;
    const headline =route.params.headline;   

    return (
        <ScrollView>
            <HeadlineDetailsTitleContainer>
                <HeadlineDetailsTitle>{headline.title}</HeadlineDetailsTitle>
                <HeadlineDetailsDivider/>
                <HeadlineDetailsAuthor>By {headline.author}</HeadlineDetailsAuthor>
                <HeadlineDetailsDateAndSource> 
                    <Moment format="MMMM DD, YYYY" date={headline.publishedAt} element={Text}></Moment> / <Moment format="h:mm:ss a" date={headline.publishedAt} element={Text}></Moment> / {headline.source && headline.source.name}
                </HeadlineDetailsDateAndSource>
                <Image style={{width:'100%', height:400}} source={{ uri: headline.urlToImage}}></Image>
            </HeadlineDetailsTitleContainer>
            <HeadlineDetailsContent>{headline.content}</HeadlineDetailsContent>
        </ScrollView>
    )
}

export default HeadlineDetails
