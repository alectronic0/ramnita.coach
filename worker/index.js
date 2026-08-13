export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Accept",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      // Parse the FormData sent from the frontend
      const formData = await request.formData();
      const name = formData.get("name") || "Unknown";
      const email = formData.get("email") || "No email provided";
      const q1 = formData.get("q1") || "N/A";
      const q2 = formData.get("q2") || "N/A";
      const q3 = formData.get("q3") || "N/A";
      const q4 = formData.get("q4") || "N/A";
      const q5 = formData.get("q5") || "N/A";

      // Build the email body
      const emailHtml = `
        <h2>New Lead Quiz Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <h3>Quiz Answers:</h3>
        <p><strong>Goal:</strong> ${q1}</p>
        <p><strong>GLP-1 Medication:</strong> ${q2}</p>
        <p><strong>Training Experience:</strong> ${q3}</p>
        <p><strong>Access to Gym/Home Setup:</strong> ${q4}</p>
        <p><strong>Commitment Level:</strong> ${q5}</p>
      `;

      // Call SMTP2GO API
      const smtp2goResponse = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          api_key: env.SMTP2GO_API_KEY,
          to: [env.DESTINATION_EMAIL],
          sender: env.SENDER_EMAIL,
          subject: `New Lead: ${name} (Raminta.coach Quiz)`,
          html_body: emailHtml
        })
      });

      if (!smtp2goResponse.ok) {
        const errorText = await smtp2goResponse.text();
        console.error("SMTP2GO Error:", errorText);
        return new Response("Failed to send email", { status: 500, headers: { "Access-Control-Allow-Origin": "*" } });
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      console.error(err);
      return new Response("Internal Server Error", { status: 500, headers: { "Access-Control-Allow-Origin": "*" } });
    }
  },
};
