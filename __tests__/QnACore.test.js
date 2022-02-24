import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import QnACore from '../client/src/components/Q&A/QnACore.jsx';
import QnAEntrie from '../client/src/components/Q&A/QnAEntrie.jsx'
import {fakeData} from '../client/src/components/Q&A/fakeData'
import AnswerEntrie from '../client/src/components/Q&A/AnswerEntrie.jsx'
import '@testing-library/jest-dom'
const path = 'http://localhost/api/qa';

test('Should render Core Component',  () => {
    render(<QnACore />);
    expect(screen.getByRole('QnA-test1')).toHaveTextContent('Questions & Answers')
})

test('Checks if Add Question is rendered', () => {
    render(<QnACore prodId='42368'/>);
    expect(screen.getByText('Add Question')).toBeDefined()
})

test('Checks the Search Bar Placeholder', () => {
    render(<QnACore prodId='42368'/>);
    expect(screen.getByPlaceholderText('Have a question? Search for answers…')).toBeDefined()
})

test('Checks if More Questions is Rendered', () => {
    render(<QnACore prodId='42368'/>);
    expect(screen.getByText('More Questions')).toBeDefined()
})

test('Checks if questions are being rendered', () => {
    render(<QnAEntrie question={{
        "question_id": 426394,
        "question_body": "Can i wash it?",
        "question_date": "2021-09-23T00:00:00.000Z",
        "asker_name": "sally",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
            "3990163": {
                "id": 3990163,
                "body": "yes! ",
                "date": "2021-09-23T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 3,
                "photos": []
            }
        }
    }} key='426394' getQuestions={() => {}}/>)
    expect(screen.getByText('Q: Can i wash it?')).toBeDefined()
})

test('Checks if Add First Answer button is being rendered', () => {
    render(<QnAEntrie question={{
        "question_id": 426394,
        "question_body": "Can i wash it?",
        "question_date": "2021-09-23T00:00:00.000Z",
        "asker_name": "sally",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
            "3990163": {
                "id": 3990163,
                "body": "yes! ",
                "date": "2021-09-23T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 3,
                "photos": []
            }
        }
    }} key='426394' getQuestions={() => {}}/>)
    expect(screen.getByText('Add First Answer')).toBeDefined()
})

test('Checks for a reported button', () => {
    render(<QnAEntrie question={{
        "question_id": 426394,
        "question_body": "Can i wash it?",
        "question_date": "2021-09-23T00:00:00.000Z",
        "asker_name": "sally",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
            "3990163": {
                "id": 3990163,
                "body": "yes! ",
                "date": "2021-09-23T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 3,
                "photos": []
            }
        }
    }} key='426394' getQuestions={() => {}}/>)
    expect(screen.getByText('Report Question')).toBeDefined()
})

test('Checks if Answers Component renders correctly', () => {
    render(<AnswerEntrie answers={
        {
            "answer_id": 5360709,
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
            "date": "2022-02-18T00:00:00.000Z",
            "answerer_name": "Estevan",
            "helpfulness": 0,
            "photos": []
        }
    } key='5360709' date='Thu Feb 17 2022' questionId='426286' getAnswers={() => {}}/>)

    expect(screen.getByText('A: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')).toBeDefined()


})

test('Checks if Answer Component Date renders correctly', () => {
    render(<AnswerEntrie answers={
        {
            "answer_id": 5360709,
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
            "date": "2022-02-18T00:00:00.000Z",
            "answerer_name": "Estevan",
            "helpfulness": 0,
            "photos": []
        }
    } key='5360709' date='Thu Feb 17 2022' questionId='426286' getAnswers={() => {}}/>)


    expect(screen.getByText(', Thu Feb 17 2022 |')).toBeDefined();

})


