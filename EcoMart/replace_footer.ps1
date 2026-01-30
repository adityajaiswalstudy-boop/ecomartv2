$newFooter = @"
<!--Footer-->
    <footer class="footer">
        <div class="footer-container">

                <!-- Brand Section -->
            <div class="footer-brand">
                <div class="logo-1">
                    <div class="logo-1">
                        
                        <h2>EcoMart</h2>
                    </div>
                </div>
                    <p>
                    Your trusted source for sustainable lifestyle products.
                    Making eco-friendly living accessible to everyone.
                    </p>
            </div>

                <!-- Quick Links -->
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="./product.html">Products</a></li>
                    <li><a href="./Blog.html">Blog</a></li>
                    <li><a href="./Research.html">Research</a></li>
                    <li><a href="./About.html">About Us</a></li>
                </ul>
            </div>

                <!-- Contact -->
                <div class="footer-contact">
                <h3>Contact Us</h3>
                <p>📍 Kathmandu,Nepal</p>
                <p>✉️ Ecomart.web@gmail.com</p>
                <p>📞 +977 9824259521</p>
                </div>

        </div>
    </footer>

<script src="../JS/navbaranimationfixed.js"></script>
</body>
</html>
"@

Get-ChildItem "d:\assignment\IS\EcoMart\Pages\*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $footerStart = $content.IndexOf('<!--Footer-->')
    if ($footerStart -ne -1) {
        $newContent = $content.Substring(0, $footerStart) + $newFooter
        Set-Content $_.FullName $newContent
    }
}