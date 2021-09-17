variable "project" {
  description = "Name of the project"
  type = string
}

resource "aws_s3_bucket" "frontend_bucket" {
  acl    = "public-read"
  bucket = var.project

  website {
    index_document = "index.html"
    error_document = "index.html"
    routing_rules = <<EOF
[{
  "Condition": {
    "KeyPrefixEquals": "admin/quote/"
  },
  "Redirect": {
    "ReplaceKeyPrefixWith": "/"
  }
}]
EOF
  }

  policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.project}/*",
      "Principal": "*"
    }
  ]
}
EOF
}

output "website_domain" {
  value = aws_s3_bucket.frontend_bucket.website_domain
}

output "website_endpoint" {
  value = aws_s3_bucket.frontend_bucket.website_endpoint
}
