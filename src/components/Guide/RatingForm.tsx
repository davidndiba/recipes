import React, { useState } from 'react';
import { Input, Button, Card, Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';

const RatingForm: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  const handleRatingChange = (currentRating: number) => {
    setRating(currentRating);
  };

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted Rating:', rating);
    console.log('Feedback:', feedback);

    setRating(null);
    setFeedback('');
  };

  return (
    <Card title="Rate Us">
      <div style={styles.container}>
        <Rate
          allowHalf
        //   value={rating}
          onChange={handleRatingChange}
          onHoverChange={(currentHover) => setHover(currentHover)}
          character={<StarFilled style={{ fontSize: 30 }} />}
        />
        {rating !== null && <p style={styles.ratingText}>Your Rating is {rating}</p>}
        <Input.TextArea
          placeholder="What's Your Feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          style={styles.textarea}
        />
        <Button type="primary" style={styles.button} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Card>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textarea: {
    border: '1px solid #a9a9a9',
    borderRadius: '5px',
    width: '300px',
    height: '150px',
    padding: '10px',
    margin: '20px 0',
  },
  button: {
    backgroundColor: '#f4d06f',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px 30px',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '10px 0',
  },
  ratingText: {
    fontSize: '20px',
    fontWeight: 'bold',
    font: 'italic',
    margin: '10px 0',
  },
};

export default RatingForm;
