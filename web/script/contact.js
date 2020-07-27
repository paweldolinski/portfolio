grecaptcha.ready(function() {
  grecaptcha
    .execute("6LcYuYwUAAAAAPSDCA0P1hwokowtqRjBRuvvymsI", {
      action: "action_name"
    })
    .then(function(token) {
      // Verify the token on the server.
    });
});
