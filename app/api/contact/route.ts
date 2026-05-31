import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
       
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Inter,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">

        <table
          width="650"
          cellpadding="0"
          cellspacing="0"
          style="
            background:#ffffff;
            border-radius:24px;
            overflow:hidden;
            border:1px solid #e5e7eb;
          "
        >

          <!-- HEADER -->
          <tr>
            <td
              style="
                background:linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6);
                padding:40px;
                text-align:center;
              "
            >
              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:32px;
                  font-weight:800;
                "
              >
                New Contact Request
              </h1>

              <p
                style="
                  margin-top:10px;
                  color:rgba(255,255,255,.85);
                  font-size:15px;
                "
              >
                Portfolio Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:40px;">

              <div
                style="
                  background:#f8fafc;
                  border:1px solid #e5e7eb;
                  border-radius:16px;
                  padding:20px;
                  margin-bottom:20px;
                "
              >
                <p style="margin:0;color:#64748b;font-size:13px;">
                  Full Name
                </p>

                <p
                  style="
                    margin:8px 0 0;
                    font-size:18px;
                    font-weight:700;
                    color:#0f172a;
                  "
                >
                  ${name}
                </p>
              </div>

              <div
                style="
                  background:#f8fafc;
                  border:1px solid #e5e7eb;
                  border-radius:16px;
                  padding:20px;
                  margin-bottom:20px;
                "
              >
                <p style="margin:0;color:#64748b;font-size:13px;">
                  Email Address
                </p>

                <p
                  style="
                    margin:8px 0 0;
                    font-size:18px;
                    font-weight:700;
                    color:#0f172a;
                  "
                >
                  ${email}
                </p>
              </div>

              <div
                style="
                  background:#f8fafc;
                  border:1px solid #e5e7eb;
                  border-radius:16px;
                  padding:24px;
                "
              >
                <p style="margin:0;color:#64748b;font-size:13px;">
                  Message
                </p>

                <p
                  style="
                    margin-top:16px;
                    color:#334155;
                    line-height:1.8;
                    font-size:15px;
                    white-space:pre-wrap;
                  "
                >
                  ${message}
                </p>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td
              style="
                border-top:1px solid #e5e7eb;
                padding:24px;
                text-align:center;
                color:#94a3b8;
                font-size:13px;
              "
            >
              Sent from UiX Portfolio Contact Form
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>

      `,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}