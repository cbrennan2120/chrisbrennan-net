"""Build the public, ATS-friendly Chris Brennan resume PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume-site" / "downloads" / "chris-brennan-resume.pdf"

INK = colors.HexColor("#101820")
INK_SOFT = colors.HexColor("#34414A")
ORANGE = colors.HexColor("#C6531E")
LINE = colors.HexColor("#D8D2C4")


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
    canvas.drawRightString(width - 0.55 * inch, 0.29 * inch, f"PAGE {doc.page} OF 2")
    canvas.restoreState()


def bullet(text, style):
    return Paragraph(f"- {text}", style)


def role_block(company, title, dates, bullets, styles, scope=None):
    heading_text = f"<b>{company}</b>  |  {title}  |  <b>{dates}</b>"
    heading = Paragraph(heading_text, styles["role"])
    content = [heading]
    if scope:
        content.append(Paragraph(scope, styles["scope"]))
    if bullets:
        content.append(bullet(bullets[0], styles["bullet"]))
        content = [KeepTogether(content)] + [bullet(item, styles["bullet"]) for item in bullets[1:]]
    content.append(Spacer(1, 0.05 * inch))
    return content


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.58 * inch,
        rightMargin=0.58 * inch,
        topMargin=0.38 * inch,
        bottomMargin=0.56 * inch,
        title="Chris Brennan - Retail Operations Leader Resume",
        author="Chris Brennan",
        subject="Resume for district, area, and multi-unit retail leadership roles",
        keywords=(
            "retail operations, district manager, area manager, multi-unit manager, "
            "team development, store management, workforce development"
        ),
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
            fontSize=25,
            leading=26,
            textColor=INK,
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.2,
            leading=13,
            textColor=ORANGE,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=10.8,
            textColor=INK_SOFT,
            spaceAfter=5,
        ),
        "highlights": ParagraphStyle(
            "Highlights",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.75,
            leading=11.3,
            textColor=INK,
            borderColor=LINE,
            borderWidth=0.6,
            borderPadding=7,
            spaceAfter=5,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=INK,
            spaceBefore=7,
            spaceAfter=5,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.15,
            leading=11.7,
            textColor=INK_SOFT,
            spaceAfter=5,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.85,
            leading=11.2,
            leftIndent=9,
            firstLineIndent=-9,
            textColor=INK_SOFT,
            spaceAfter=3.4,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.8,
            leading=12,
            textColor=INK,
            spaceAfter=2,
            keepWithNext=True,
        ),
        "scope": ParagraphStyle(
            "Scope",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8.2,
            leading=10,
            textColor=ORANGE,
            spaceAfter=4,
            keepWithNext=True,
        ),
        "page_two": ParagraphStyle(
            "PageTwo",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=16,
            leading=18,
            textColor=INK,
            spaceAfter=5,
        ),
    }

    story = [
        Paragraph("CHRIS BRENNAN", styles["name"]),
        Paragraph("RETAIL OPERATIONS LEADER", styles["headline"]),
        Paragraph(
            "Portage, Michigan  |  Open to regional travel  |  (269) 808-0491  |  "
            "<link href='mailto:cbrennan2120@gmail.com'>cbrennan2120@gmail.com</link>  |  "
            "<link href='https://chrisbrennan.net/'>chrisbrennan.net</link>  |  "
            "<link href='https://www.linkedin.com/in/chris-brennan-38b27486'>LinkedIn</link>",
            styles["contact"],
        ),
        Paragraph(
            "26+ YEARS IN ANIMAL-FOCUSED RETAIL  |  $3M+ ANNUAL STORE SALES  |  "
            "90%+ AVERAGE NEIGHBOR READY REVIEW  |  #1 FRANCHISE CUSTOMER-LOYALTY AVERAGE IN 2016",
            styles["highlights"],
        ),
        Paragraph("EXECUTIVE SUMMARY", styles["section"]),
        Paragraph(
            "Retail operations leader with more than 26 years in animal-focused retail. Launched the Battle Creek Pet Supplies Plus franchise location and developed it into a $3M+ annual operation through clear standards, hands-on team development, disciplined execution, and lasting community partnerships. Pursuing a district, area, or multi-unit leadership opportunity in Southwest Michigan with regular regional travel.",
            styles["body"],
        ),
        Paragraph("CORE LEADERSHIP STRENGTHS", styles["section"]),
        Paragraph(
            "Retail Operations  |  Team Development  |  Store Management  |  Customer Experience  |  Performance Management  |  Process Improvement  |  Inventory Management  |  Merchandising  |  Training and Development  |  Loss Prevention  |  Hiring and Onboarding  |  Community Engagement",
            styles["body"],
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]),
    ]

    story.extend(
        role_block(
            "PET SUPPLIES PLUS",
            "Store Team Leader",
            "Jan 2012 - Present",
            [
                "Led the Battle Creek franchise location from pre-opening preparation through launch and ongoing operations, coordinating with franchise ownership, contractors, vendors, and the Pet Supplies Plus corporate setup team.",
                "Helped assemble fixtures, establish merchandising layouts, place initial product orders, prepare opening inventory, and build store-level policies and routines within the franchise framework.",
                "Lead all aspects of a $3M+ annual retail operation, including team leadership, customer experience, merchandising, inventory, animal-care standards, loss prevention, facilities, and daily execution.",
                "Built the store team from the ground up and have led the hiring, onboarding, and development of every employee at the location since opening.",
                "Built strong management continuity: an assistant manager has served at the location since opening, and two employees advanced from cashier into leadership roles with 13+ and 6+ years of service.",
                "Maintained a 90%+ average on Neighbor Ready Reviews since opening and led the first Pet Supplies Plus franchise location to achieve a perfect 100% score in 2019.",
                "Led the store to the highest average franchise SMG customer-loyalty score in 2016 among more than 200 franchise locations.",
            ],
            styles,
            scope="FOUNDING LEADER - BATTLE CREEK FRANCHISE LOCATION",
        )
    )

    story.extend(
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
        )
    )

    story.extend(
        [
            PageBreak(),
            Paragraph("EXPERIENCE, IMPACT &amp; QUALIFICATIONS", styles["page_two"]),
        ]
    )
    story.extend(
        role_block(
            "QUALITY STORES",
            "Sales Team Member",
            "Oct 1999 - Jul 2001",
            [
                "Built an early retail foundation through customer service, merchandising, product knowledge, and reliable execution in a fast-paced store environment."
            ],
            styles,
        )
    )

    story.extend(
        [
            Paragraph("WORKFORCE DEVELOPMENT &amp; COMMUNITY IMPACT", styles["section"]),
            bullet(
                "Sustained a 10+ year partnership with the Battle Creek Public Schools Work-Based Learning Program, helping high school students with developmental disabilities build workplace and social skills and hiring four participants into store roles.",
                styles["bullet"],
            ),
            bullet(
                "Participated repeatedly in Goodwill Connects mock interviews, job-readiness training, and summer internships for high school students, resulting in one participant joining the store team.",
                styles["bullet"],
            ),
            bullet(
                "Led a four-year partnership with The Arc of Calhoun County, coaching volunteers with developmental disabilities in workplace and social skills while they supported store upkeep.",
                styles["bullet"],
            ),
            bullet(
                "Worked with local rescue partners to support more than 100 kitten adoptions in 2025.",
                styles["bullet"],
            ),
            Paragraph("COMMUNITY LEADERSHIP", styles["section"]),
        ]
    )
    story.extend(
        role_block(
            "HUMANE SOCIETY OF SOUTH CENTRAL MICHIGAN",
            "Board Member, Former Chair and Vice Chair",
            "Nov 2019 - Present",
            [
                "Provides nonprofit governance and community leadership in support of companion-animal welfare, education, adoption, and outreach."
            ],
            styles,
        )
    )

    story.extend(
        [
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
            Paragraph("DIGITAL &amp; AUTOMATION SKILLS", styles["section"]),
            Paragraph(
                "Python  |  PowerShell  |  Excel and VBA Automation  |  HTML/CSS  |  JSON Structured Data",
                styles["body"],
            ),
            Paragraph(
                "Uses AI-assisted workflow design, prompt development, and rapid prototyping with OpenAI Codex and related tools to build practical reporting, documentation, and operational solutions.",
                styles["body"],
            ),
            Paragraph("EDUCATION", styles["section"]),
            Paragraph(
                "<b>Kalamazoo Valley Community College</b>  |  Business  |  2003 - 2004",
                styles["body"],
            ),
        ]
    )

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
