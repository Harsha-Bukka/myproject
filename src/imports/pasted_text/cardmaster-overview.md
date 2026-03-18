Project: CardMaster - Credit Card Issuance, Transactions & Risk Management System
1. Introduction
CardMaster is a web-based Credit Card Management System designed for banks and financial institutions to handle the complete lifecycle of credit cards-from application, credit assessment, card issuance, and limit management to transaction processing, billing, rewards. and fraud checks. It supports customers, branch teams, underwriting officers, operations teams, and risk analysts with comprehensive workflows and dashboards.
The system uses a REST API-based backend architecture and Angular/React frontend and is compatible with Java (Spring Boot) or .NET (ASP.NET Core).
Actors / Users
• Customer: Applies for credit cards, views usage, bills, rewards.
• Branch Officer: Captures customer applications and documents.
• Underwriter: Evaluates creditworthiness and approves/declines applications.
• Operations Analyst: Manages card issuance, account setup, and billing cycles.
• Risk Analyst: Reviews suspect transactions and fraud alerts
• Bank Admin: Configures products, limits, fees, and reporting.
2. Module Overview
2.1 Identity & Access Management
Authentication, RBAC, and audit logging.
2.2 Customer Profile & Card Application Management
Captures card applications, documents, and application processing.
2.3 Credit Assessment & Underwriting
Performs scoring, risk assessment, and approval decisions.
2.4 Card Product, Limit & Fee Management
Defines card tiers, fees, credit limits, and interest rules.
2.5 Card Issuance & Account Setup
Manages card generation, activation, and account initialization.
2.6 Transactions, Authorization & Posting
Handles card transactions, holds, postings, and reversals.
2.7 Billing, Statements & Payments
Generates statements, tracks due amounts, and registers payments.
2.8 Rewards, Cashback & Loyalty Management Calculates reward points, accruals, redemptions.
2.9 Fraud Monitoring & Risk Alerts
Monitors high-risk transactions and triggers alerts.
2.10 Analytics & Reporting
Portfolio insights, delinquency, revenue dashboards.
2.11 Notifications & Alerts
In-app alerts for payments due, transactions, risk, and offers.
3. Architecture Overview
• Frontend: Angular or React
• Backend: REST API-based architecture
• Database: Relational (MySQL/PostgreSQL/SQL Server)
4. Module-Wise Design
4.1 Identity & Access Management Module
Features:
• Manage users, roles, authentication, audit logs Entities:
• User
UseriD
Name
• Email
Phone
AuditLog
• AuditiD
UseriD
Role (Customer/Officer/Underwriter/Risk/Admin)
Action
Resource
Timestamp
• MetadataQ
Bing Videos
HTML Headings
X
New tab
X
CardM.
%20-%20Cognizant/Desktop/CardMaster%20Main/CardMaster%20-%20Credit%20Card%20lssuance%20Transactions%20Risk%20M
aあ
1 Ask Copilot
+
3
of 10
ICD
4.2 Customer Profile & Card Application Management Module
Features:
this only collect and manage data of customer
• Capture customer profiles, receive card applications Entities:
• Customer
first customer is created
then customer chooses -> request card limit or card tpe
• CustomerID
• Name
• DOB
• Contactinfo
• Income
• EmploymentType
• Status
• CardApplication
• ApplicationID
• CustomeriD
• ProductiD
• RequestedLimit
• ApplicationDate
• Status (Submitted/UnderReview/Approved/Rejected)
h
• Document
• DocumentiD
• ApplicationID
• DocumentType
• FileURI
• UploadedDate
Status
4.3 Credit Assessment & Underwriting Module
Features:
• Perform underwriting checks, risk sconng
Entities:
• CreditScore
• ScorelD
• ApplicationID
• BureauScore
• InternalScore
GeneratedDate
• UnderwritingDecision
• DecisionID
• ApplicationID
• UnderwriteriD
• Decision (Approve/Reject/Conditional)
• ApprovedLimit
Remarks
• DecisionDate
4.4 Card Product, Limit & Fee Management Module Features:
• Manage card products, interest, fees, and limits Entities:
• CardProduct
• ProductiD
• Name
• Category (Standard/Gold/Platinum)
• InterestRate
• AnnualFee
• Status
FeeConfig
• FeelD
• ProductiD
• FeeType (Late/Overlimit/Annual)
Search65957/OneDrive%20-%20Cognizant/Desktop/CardMaster%20Main/CardMaster%20-%20Credit%20Card%2Olssuance%20Transactions%20Risk%20Management...
2
A"
aあ
Ask Copilot
-
+
5
of 10
ED
Amount
4.5 Card Issuance & Account Setup Module
Features:
• Generate card number, activate card, create account Entities:
• Card
CardID
• CustomeriD
• ProductiD
• MaskedCardNumber
• ExpiryDate
• CVVHash
• Status (Issued/Active/Blocked)
• CardAccount
• AccountiD
• CardID
• CreditLimit
• AvailableLimit
• OpenDate
• Status (Active/Closed)
4.6 Transactions, Authorization & Posting Module Features:
• Authorize and post credit card transactions
Entities:
• Transaction
• TransactioniD
• AccountiD
• Amount
• Currency
• Merchant
a Channel (POS/Online/ATM)
• TransactionDate
• Status (Authorized/Posted/Failed/Reversed)
• TransactionHold
0 HoldiD
• TransactionID
a Amount
• HoldDate a ReleaseDate
4.7 Billing, Statements & Payments Module Features:
• Bill generation, payment capture, statement preparation Entities:
• Statement
• StatementID
• AccountID
• PeriodStart
• PeriodEnd
• TotalDue
a MinimumDue
• GeneratedDate
a Status (Open/Closed)
• Payment
• PaymentiD
a. AccountID
a Amount
• PaymentDate
• Method (UPI/NetBanking/Cash/Cheque)
• StatusDatabase Design
Tables:
• User(UserID, Name, Role, Email, Phone)
• AuditLog(AuditiD, UseriD, Action, Resource, Timestamp, Metadata)
• Customer(CustomerID, Name, DOB, Contactinfo, Income, EmploymentType,
Status
• CardApplication(ApplicationiD, CustomerID, ProductI, RequestedLimit,
ApplicationDate, Status)
• Document(DocumentiD, ApplicationiD, DocumentType, FileURI, UploadedDate.
Status)
• CreditScore(ScoreD, ApplicationiD, BureauScore, InternalScore, GeneratedDate)
• UnderwritingDecision(DecisionID, ApplicationID, UnderwriterID, Decision,
ApprovedLimit, Remarks, DecisionDate)
• CardProduct(ProductiD, Name, Category, InterestRate, AnnualFee, Status)
• FeeConfig(FeelD, ProductID, FeeType, Amount)
• Card(CardID, CustomerlD, ProductiD, MaskedCardNumber, ExpiryDate,
CVVHash, Status)
• CardAccount(AccountID, CardID, CreditLimit, AvailableLimit, OpenDate, Status)
• Transaction(TransactionID, AccountiD, Amount, Currency, Merchant, Channel,
TransactionDate, Status)
• TransactionHold(HoldID, TransactionID, Amount, HoldDate, ReleaseDate)
• Statement(StatementID, AccountID, PeriodStart, PeriodEnd, TotalDue,
MinimumDue, GeneratedDate, Status)
• Payment(PaymentID, AccountID, Amount, PaymentDate, Method, Status)
• RewardPoint(RewardiD, AccountiD, PointsEared, EarnedDate, ExpiryDate)
• RewardRedemption(RedemptionID, AccountiD, PointsRedeemed,
RedeemedDate, ItemRedeemed)
• RiskAlertAlertID, TransactionID, Severity, FlagReason, CreatedDate, Status)
• RiskCase(RiskCaseID, AlertID, InvestigatorID, Notes, Status)
• PortfolioReport(ReportiD, Scope, Metrics, GeneratedDate)
• Notification(NotificationID, UserD, Message, Category, Status, CreatedDate)
7. User Interface Design
• Customer App: Card details, limits, statements, payments, rewards
• Branch Dashboard: Application capture, document upload
• Underwriter Console: Scoring, decisions, history
• Operations Dashboard: Issuance, statements, payments
• Risk Dashboard: Alerts, fraud cases
• Admin Console: Products, fees, limits, reports
8. Non-Functional Requirements
• Performance: 50,000 concurrent users during transaction peaks
• Security: PCI-aligned encryption, RBAC, audit trails
• Scalability: Multi-product, multi-region scaling
• Availability: 99.9% uptime
• Maintainability: Modular services, versioned APls
• Observability: Centralized logs, fraud metrics, system KPIs
9. Assumptions & Constraints
• Phase-1 excludes external card network interfaces (Visa/Mastercard)
• Payment rail integrations are reference-only
• Notifications limited to in-app messages
• Compatible