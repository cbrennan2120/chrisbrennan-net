"""Build the public, ATS-friendly Chris Brennan resume PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume-site" / "downloads" / "chris-brennan-resume.pdf"

INK = colors.HexColor("#101820")
INK_SOFT = colors.HexColor("#34414A")
ORANGE = colors.HexColor("#C6531E")
MINT = colors.HexColor("#5DBEAE")
LINE = colors.HexColor("#D8D2C4")
PAPER = colors.HexColor("#FFFDF8")


def draw_page(canvas, doc):
    canvas.saveState()
    width, height = letter
    canvas.setFillColor(INK)
    canvas.rect(0, height - 0.18 * inch, width, 0.18 * inch, fill=1, stroke=0)
    canvas.setFillColor(ORANGE)
    canvas.rect(0, height - 0.18 * inch, 1.45 * inch, 0.18 * inch, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.line(0.55 * inch, 0.47 * inch, width - 0.55 * inch, 0.47 * inch)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(INK_SOFT)
    canvas.drawString(0.55 * inch, 0.29 * inch, "CHRIS BRENNAN  |  RETAIL OPERATIONS LEADER")
    canvas.drawRightString(width - 0.55 * inch, 0.29 * inch, f"PAGE {doc.page}")
    canvas.restoreState()


def bullet(text, style):
    return Paragraph(f"- {text}", style)


def role_block(company, title, dates, bullets, styles):
    heading = Table(
        [
            [
                Paragraph(f"<b>{company}</b><br/><font color='#34414A'>{title}</font>", styles["role"]),
                Paragraph(dates, styles["date"]),
            ]
        ],
        colWidths=[4.95 * inch, 1.25 * inch],
    )
    heading.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    content = [heading]
    for item in bullets:
        content.append(bullet(item, styles["bullet"]))
    content.append(Spacer(1, 0.07 * inch))
    return KeepTogether(content)


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.38 * inch,
        bottomMargin=0.54 * inch,
        title="Chris Brennan - Retail Operations Leader Resume",
        author="Chris Brennan",
        subject="Resume for district, area, and multi-unit retail leadership roles",
        keywords="retail operations, district manager, multi-unit manager, team development, store management",
    )
    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        id="resume",
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=draw_page))

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=26,
            leading=27,
            textColor=INK,
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.5,
            leading=14,
            textColor=ORANGE,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.4,
            leading=11,
            textColor=INK_SOFT,
            spaceAfter=5,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=11,
            textColor=INK,
            spaceBefore=3,
            spaceAfter=4,
            borderWidth=0,
            borderPadding=0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=11,
            textColor=INK_SOFT,
            spaceAfter=4,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.25,
            leading=10.2,
            leftIndent=9,
            firstLineIndent=-9,
            textColor=INK_SOFT,
            spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.1,
            leading=11.4,
            textColor=INK,
        ),
        "date": ParagraphStyle(
            "Date",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=7.5,
            leading=10,
            alignment=TA_RIGHT,
            textColor=INK_SOFT,
        ),
        "label": ParagraphStyle(
            "Label",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=7.7,
            leading=9.5,
            textColor=ORANGE,
            spaceAfter=2,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=10.2,
            textColor=INK_SOFT,
            spaceAfter=3,
        ),
    }

    story = [
        Paragraph("CHRIS BRENNAN", styles["name"]),
        Paragraph("RETAIL OPERATIONS LEADER", styles["headline"]),
        Paragraph(
            "Portage, Michigan  |  Open to regional travel  |  cbrennan2120@gmail.com  |  "
            "chrisbrennan.net  |  linkedin.com/in/chris-brennan-38b27486",
            styles["contact"],
        ),
    ]

    highlight_data = [
        [
            Paragraph("<b>26+ YEARS</b><br/><font size='7'>ANIMAL-FOCUSED RETAIL</font>", styles["small"]),
            Paragraph("<b>14+ YEARS</b><br/><font size='7'>PET SUPPLIES PLUS</font>", styles["small"]),
            Paragraph("<b>#1 IN 2016</b><br/><font size='7'>FRANCHISE SMG AVERAGE</font>", styles["small"]),
            Paragraph("<b>SINCE 2019</b><br/><font size='7'>NONPROFIT BOARD SERVICE</font>", styles["small"]),
        ]
    ]
    highlights = Table(highlight_data, colWidths=[1.575 * inch] * 4)
    highlights.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PAPER),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.extend([highlights, Spacer(1, 0.04 * inch)])

    story.extend(
        [
            Paragraph("EXECUTIVE SUMMARY", styles["section"]),
            Paragraph(
                "Retail operations leader with more than 26 years in animal-focused retail, including more than 14 years with Pet Supplies Plus. Develops capable teams, turns expectations into repeatable execution, and improves customer experience through clear standards, practical coaching, measurement, and accountability. Pursuing district, area, or multi-unit retail leadership in Southwest Michigan with regular regional travel.",
                styles["body"],
            ),
            Paragraph("CORE LEADERSHIP STRENGTHS", styles["section"]),
            Paragraph(
                "Retail Operations  |  Team Development  |  Store Management  |  Customer Experience  |  Performance Management  |  Process Improvement  |  Inventory Management  |  Merchandising  |  Training and Development  |  Loss Prevention  |  Hiring and Onboarding  |  Community Engagement",
                styles["body"],
            ),
            Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]),
            role_block(
                "PET SUPPLIES PLUS",
                "Store Team Leader",
                "Jan 2012 - Present",
                [
                    "Lead daily store operations across customer service, team execution, merchandising, inventory, animal-care standards, and operating routines.",
                    "Develop team members and supervisors through clear expectations, hands-on coaching, accountability, and consistent follow-through.",
                    "Build practical workflows that improve task ownership, inventory accuracy, merchandising execution, and the customer experience.",
                    "Led the store to the highest average franchise SMG customer-loyalty score in 2016 among more than 200 franchise locations.",
                    "Led the partnership associated with The Arc of Calhoun County's 2017-2018 Volunteer Employer of the Year recognition; received the 2019 RISE Award for supporting people with disabilities.",
                ],
                styles,
            ),
            role_block(
                "TRACTOR SUPPLY COMPANY",
                "Assistant Manager",
                "Jan 2002 - Jan 2012",
                [
                    "Supported daily operations, customer service, merchandising, inventory control, and team execution in a high-volume rural-lifestyle retail environment.",
                    "Trained and coached team members, maintained standards, and coordinated priorities across the sales floor and back room.",
                    "Built a strong operational foundation in physical inventory, product knowledge, problem solving, and customer-focused leadership.",
                ],
                styles,
            ),
            role_block(
                "QUALITY STORES",
                "Sales Team Member",
                "Oct 1999 - Jul 2001",
                [
                    "Built an early retail foundation through customer service, merchandising, product knowledge, and reliable execution in a fast-paced store environment."
                ],
                styles,
            ),
            Paragraph("COMMUNITY LEADERSHIP", styles["section"]),
            role_block(
                "HUMANE SOCIETY OF SOUTH CENTRAL MICHIGAN",
                "Board Member, Former Chair and Vice Chair",
                "Nov 2019 - Present",
                [
                    "Provides nonprofit governance and community leadership in support of companion-animal welfare, education, adoption, and outreach."
                ],
                styles,
            ),
            Paragraph("RECOGNITION", styles["section"]),
            bullet(
                "2016 Franchise SMG Leader - Highest average customer-loyalty score on the franchise side of Pet Supplies Plus among more than 200 locations.",
                styles["bullet"],
            ),
            bullet(
                "2017-2018 Volunteer Employer of the Year - Led the Pet Supplies Plus partnership recognized by The Arc of Calhoun County for inclusive job-skill opportunities.",
                styles["bullet"],
            ),
            bullet(
                "2019 RISE Award - Recognized by The Arc of Calhoun County for supporting people with disabilities and treating every person with value and respect.",
                styles["bullet"],
            ),
            Paragraph("EDUCATION", styles["section"]),
            Paragraph("<b>Kalamazoo Valley Community College</b>  |  Business  |  2003 - 2004", styles["body"]),
        ]
    )

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
