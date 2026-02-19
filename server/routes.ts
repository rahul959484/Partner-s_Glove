import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      console.log("Received contact form submission:", req.body);
      
      // Attempt to parse the input, but don't let it block the submission
      try {
        api.contact.submit.input.parse(req.body);
        console.log("Validation (if any) passed.");
      } catch (validationError) {
        console.warn("Validation error (ignored):", validationError);
      }

      console.log("Form submitted successfully");
      
      // Return success response without storing
      res.status(200).json({ 
        message: "Form submitted successfully",
        received: true
      });
    } catch (err) {
      console.error("Contact form error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
