const Mailgen = require("mailgen")
const nodemailer = require("nodemailer")

exports.sendMail = async (req, res) => {
    try {
        const { fullname, email, phone } = req.body;
        // console.log(userLoginLink)
        let config = {
            service: "gmail",
            auth: {
                user: "tejas.spitertech@gmail.com",
                pass: "sbizasygivyilumk"
            }
        }

        let transporter = nodemailer.createTransport(config);
        let mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "MAF Group",
                link: "https://mailgen.js/"
            }
        });

        let response = {
            body: {
                name: "Admin",
                table: {
                    data: [
                        {
                            employeeName: fullname,
                            email: email,
                            phone: phone
                        }
                    ]
                },
                outro: "Demo Request"
            }
        }

        let mail = mailGenerator.generate(response);
        let message = {
            from: "tejas.spitertech@gmail.com",
            to: "spitertecch@gmail.com",
            subject: "Request Demo",
            html: mail
        }

        transporter.sendMail(message).then((info) => {
            return res.status(201).json({
                msg: "You should receive an email",
                mail: info.response
            })
        }).catch(err => {
            return res.status(500).json({ err });
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while sending the mail",
            error
        })
    }
}