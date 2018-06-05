module.exports = (body, scripts) => `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="./datepicker.css">
      <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
      <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">
      <link href="https://fonts.googleapis.com/css?family=Cabin:400,400i,500,500i,600,600i,700,700i|Open+Sans|Roboto" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300" rel="stylesheet">
      <style>
        #slider-container .slick-list {
          width: 760px;
        }
        #content {
          position: relative;
        }
      </style>
    </head>
    <body>
      ${body}
    </body>
    ${scripts}
  </html>
`

