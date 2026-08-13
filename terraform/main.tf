terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {}

variable "cloudflare_account_id" {
  description = "The Cloudflare Account ID"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "The Cloudflare Zone ID for raminta.coach"
  type        = string
}

variable "smtp2go_api_key" {
  description = "SMTP2GO API Key"
  type        = string
  sensitive   = true
}

variable "destination_email" {
  description = "The email address where leads should be sent"
  type        = string
  default     = "info@raminta.coach"
}

variable "sender_email" {
  description = "The email address sending the lead (must be verified in SMTP2GO)"
  type        = string
  default     = "noreply@raminta.coach"
}

resource "cloudflare_worker_script" "lead_quiz_worker" {
  account_id = var.cloudflare_account_id
  name       = "raminta-coach-lead-quiz"
  content    = file("${path.module}/../worker/index.js")
  module     = true

  secret_text_binding {
    name = "SMTP2GO_API_KEY"
    text = var.smtp2go_api_key
  }
  
  plain_text_binding {
    name = "DESTINATION_EMAIL"
    text = var.destination_email
  }
  
  plain_text_binding {
    name = "SENDER_EMAIL"
    text = var.sender_email
  }
}

resource "cloudflare_worker_route" "lead_quiz_route" {
  zone_id     = var.cloudflare_zone_id
  pattern     = "api.raminta.coach/quiz"
  script_name = cloudflare_worker_script.lead_quiz_worker.name
}
