

1. Clone the repo:

```bash
$ git clone git@github.com:yanshiyason/cypress-early-hints-support-feature-request.git
```

2. Install the dependencies

```bash
$ cd cypress-early-hints-support-feature-request

# install ruby deps:
# if you don't have bundler -- gem install bundler
bundle install

# install js deps:
npm install
```

3. Start server:

```bash
$ rails server --port 3001 --early-hints
```

Make sure it uses early hints

```bash
$ curl -I localhost:3001

HTTP/1.1 103 Early Hints
Link: </assets/hello.self-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.css?body=1>; rel=preload; as=style

HTTP/1.1 103 Early Hints
Link: </assets/application.self-f0d704deea029cf000697e2c0181ec173a1b474645466ed843eb5ee7bb215794.css?body=1>; rel=preload; as=style

HTTP/1.1 103 ...

HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Content-Type: text/html; charset=utf-8
ETag: W/"46b1e11efb6948e89281cf3d8eadce9b"
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: _cypress_early_hints_support_feature_request_session=PhSm3MPfrKlTHmZB0D9eLIXBgAIbumsAvDtib4IBsZS8IanDEqcbfMrWzqH%2FBkYpsh6ETh1Ks%2B0LNB7bPy578wIjfwSttpy3NQ%2FRC8FqbpXo7LIrIV7xNTDng7HhISOIBL4ejk45xSMuNUwT6DM%3D--r7eElxjwcJwt6KK0--NBmtlFR5Vd2iy9tHWnaq5A%3D%3D; path=/; HttpOnly
X-Request-Id: eeb18461-da29-4dfd-87d7-6980ba8f4f5d
X-Runtime: 0.096021
```

4. Start cypress:

```bash
$ npx cypress open
```
