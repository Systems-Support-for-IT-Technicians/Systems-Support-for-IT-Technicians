---
title: Batch Files
---

## What is a Batch File?

A Batch file is a text file containing a series of commands to be executed by double clicking on it or using the Command Prompt (CMD). When a batch file is run, CMD reads the file and executes its commands.

### EXAMPLE

### Enter Your Name

Type this into notepad:

@echo off

echo What is your name?

set /p name=Name:

pause

cls

echo Hello %name%!

pause

cls

exit

Save the file as: whats_the_name.bat

Run the batch file and check it works and take a screenprint when it pauses just before it finishes.

