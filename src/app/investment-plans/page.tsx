import { redirect } from "next/navigation";

// The plans overview now lives on the home page — send old links there.
export default function InvestmentPlansRedirect() {
  redirect("/#plans");
}
