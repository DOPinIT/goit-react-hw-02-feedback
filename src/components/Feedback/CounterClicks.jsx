import { Container } from './feedback.style'

export const TotalClicks = ({CounterGood, CounterNeutral, CounterBad}) => {
        return (
            <Container>
                <h1>Statistics</h1>
                <ul >
                    <li><p>Good: { CounterGood }</p></li>
                    <li><p>Neutral: { CounterNeutral }</p></li>
                    <li><p>Bad: { CounterBad }</p></li>
                </ul>
            </Container>
        )
}