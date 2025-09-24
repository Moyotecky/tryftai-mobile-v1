#!/bin/bash

# Get the current git branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Define the branch naming convention regex (change as needed)
regex="^(fix|feat|int|integration|feature|bugfix|hotfix)\/[A-Za-z0-9\-]+$"

# Check if the branch name matches the naming convention
if [[ $branch_name =~ $regex ]]; then
  echo "Branch name '$branch_name' follows the naming convention."
  exit 0
else
  echo "ERROR: Branch name '$branch_name' does NOT follow the naming convention."
  echo "Branch names should start with 'fix/', 'feat/', 'int/', 'integration/', 'feature/', 'bugfix/', or 'hotfix/' followed by a name."
  exit 1
fi
