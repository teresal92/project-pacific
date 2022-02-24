import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import QnACore from '../client/src/components/Q&A/QnACore.jsx';
import QnAEntrie from '../client/src/components/Q&A/QnAEntrie.jsx'
import {fakeData} from '../client/src/components/Q&A/fakeData'
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



