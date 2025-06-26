// A simple custom event tracker that prints JSON-formatted logs
function trackEvent(eventName, metadata) {
  const event = {
    event: eventName,
    ...metadata,
    timestamp: new Date().toISOString(),
  };

  console.log(JSON.stringify(event)); // You can send this to a logging system or file
}

// Example tracked events
trackEvent("user_signup", {
  user_id: "2487",
  source: "web"
});

trackEvent("order_placed", {
  order_id: "ORD-1123",
  user_id: "2487",
  payment_method: "credit_card",
  amount: 240.75
});
