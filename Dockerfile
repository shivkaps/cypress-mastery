FROM cypress/included:4.5.0
COPY . /e2e
WORKDIR /e2e
ENTRYPOINT [ "npm", "run" ]
CMD [ "cy:run-mastery" ]