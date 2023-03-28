
import { Container } from './feedback.style'

export const Feedback = ({onClickIncrementGood, onClickIncrementNeutral, onClickIncrementBad}) => {
        return (
            <Container>
                <h1>Please leave feedback</h1>
                <ul >
                    <li><button type="button" onClick={onClickIncrementGood}>Good</button></li>
                    <li><button type="button" onClick={onClickIncrementNeutral}>Neutral</button></li>
                    <li><button type="button" onClick={onClickIncrementBad}>Bad</button></li>
                </ul>
            </Container>
        )
}