<#
Usage: .\encode_service_account.ps1 -Path .\service-account.json
Outputs a base64 string you can paste into `GOOGLE_SERVICE_ACCOUNT_B64` in your .env
Also prints a Vercel CLI command example to set the variable.
#>
param(
  [Parameter(Mandatory=$true)][string]$Path
)

if (-not (Test-Path $Path)) {
  Write-Error "File not found: $Path"
  exit 1
}

$json = Get-Content -Raw -Path $Path
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($json))

Write-Output "Base64 (copy this whole string):"
Write-Output $b64

Write-Output "`nPowerShell: set local env (current session):"
Write-Output "$env:GOOGLE_SERVICE_ACCOUNT_B64='$b64'"

Write-Output "`nVercel CLI (example):"
Write-Output "vercel env add GOOGLE_SERVICE_ACCOUNT_B64 production --body '$b64'"
