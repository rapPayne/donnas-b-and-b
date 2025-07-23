const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample responses for the help system
const helpResponses = {
  reservation: "To make a reservation at Donna's Home away from Home, please call us at (555) 123-4567 or email donna@homewayaway.com. We'd be happy to check availability and help you plan your perfect getaway!",
  amenities: "Our cozy bed and breakfast offers comfortable rooms with private bathrooms, complimentary breakfast, free Wi-Fi, beautiful garden views, and a warm, welcoming atmosphere. Each room is individually decorated with local touches.",
  location: "We're located in the heart of the countryside, just 15 minutes from downtown and close to hiking trails, local wineries, and charming shops. The perfect spot for a peaceful retreat!",
  breakfast: "Our complimentary breakfast features fresh, locally-sourced ingredients including farm eggs, homemade breads, seasonal fruits, and Donna's famous blueberry pancakes. Served daily from 7:30-9:30 AM.",
  rates: "Our rates vary by season and room type, starting at $125 per night. This includes breakfast for two and all amenities. Please contact us for specific dates and special packages!",
  policies: "Check-in is from 3-7 PM, check-out by 11 AM. We require 48-hour notice for cancellations. Sorry, no pets allowed, but we're happy to recommend nearby pet-friendly accommodations.",
  default: "Thank you for your question! I'm here to help with information about Donna's Home away from Home. Feel free to ask about reservations, amenities, breakfast, rates, or anything else about your stay. For immediate assistance, please call (555) 123-4567."
};

// Helper function to generate responses
function generateHelpResponse(question) {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('reservation') || lowerQuestion.includes('book') || lowerQuestion.includes('available')) {
    return helpResponses.reservation;
  } else if (lowerQuestion.includes('amenities') || lowerQuestion.includes('facilities') || lowerQuestion.includes('features')) {
    return helpResponses.amenities;
  } else if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('address')) {
    return helpResponses.location;
  } else if (lowerQuestion.includes('breakfast') || lowerQuestion.includes('food') || lowerQuestion.includes('meal')) {
    return helpResponses.breakfast;
  } else if (lowerQuestion.includes('rate') || lowerQuestion.includes('price') || lowerQuestion.includes('cost') || lowerQuestion.includes('how much')) {
    return helpResponses.rates;
  } else if (lowerQuestion.includes('policy') || lowerQuestion.includes('cancel') || lowerQuestion.includes('check') || lowerQuestion.includes('pet')) {
    return helpResponses.policies;
  } else {
    return helpResponses.default;
  }
}

// API Routes
app.post('/api/help', (req, res) => {
  try {
    const { question } = req.body;
    
    if (!question || question.trim() === '') {
      return res.status(400).json({ 
        error: 'Please provide a question.' 
      });
    }

    // Simulate processing time
    setTimeout(() => {
      const response = generateHelpResponse(question);
      res.json({ 
        response,
        timestamp: new Date().toISOString()
      });
    }, 1000);

  } catch (error) {
    console.error('Error processing help request:', error);
    res.status(500).json({ 
      error: 'Sorry, I encountered an error processing your request. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});