<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <style>
          /* Add your CSS styling rules here */
          svg {
            width: 300px;
            height: 200px;
          }
          text {
            font-size: 24px;
          }
          circle {
            /* Add your circle styling rules here */
          }
        </style>
      </head>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>
  
  <!-- Copy all other nodes unchanged -->
  <xsl:template match="node() | @*">
    <xsl:copy>
      <xsl:apply-templates select="node() | @*"/>
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
