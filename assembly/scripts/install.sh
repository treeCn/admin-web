npm install
NODE_ENV=$CI_COMMIT_REF_NAME npm run build
# NODE_ENV=master npm run build
# NODE_ENV=integration npm run build
# NODE_ENV=pre-production npm run build
# NODE_ENV=production npm run build
