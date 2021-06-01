import styled from 'styled-components/native';

export const HeadlineDetailsTitleContainer = styled.View`
    font-size: 40px;
    opacity: 0.9;
    background-color: #000;
    padding: 5px 0 0;
`

export const HeadlineDetailsTitle = styled.Text`
    color: #fff;
    text-align: left;
    font-size: 40px;
    font-weight: bold;
    padding:5px;
    margin: 0 10px 0;
`

export const HeadlineDetailsAuthor = styled.Text`
    color: #fff;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding:5px;
    margin: 0 10px 0;
`

export const HeadlineDetailsDateAndSource = styled.Text`
    color: #A9A9A9;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding:5px;
    padding-bottom:20px;
    margin: 0 10px 0;
`

export const HeadlineDetailsDivider = styled.View`
    border-bottom-color: #696969;
    border-bottom-width: 1px;
    margin: 10px;
`
export const HeadlineDetailsContent = styled.Text`
    color: #000;
    text-align: justify;
    font-size: 20px;
    padding:20px;
`