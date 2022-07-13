curl -H "Accept: application/vnd.github+json" -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/codeMonkeysBe/renodepend/pulls | jq \
	'.[] | select(.head.ref|startswith("renovate")) | { meta: [.labels[].name|split(":") | { (.[0]) : .[1] }] | add, title:.title, created:.created_at}'
