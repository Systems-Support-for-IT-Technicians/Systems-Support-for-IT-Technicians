---
title: The Registry
---

## What is the Registry

The registry is a special database found on Microsoft operating systems from Windows 95 onwards used to store configuration settings relating to both hardware and software. For instance every application installed is registered here so the operating system knows its details. Likewise all applications installed access the registry to establish what hardware is available such as printers and storage devices. Earlier operating systems such as Windows 3x used a collection of INI files for configuration purposes.

The registry is a complex database that if configured incorrectly can render a machine unbootable. However, advanced configuration is possible by experience users to optimise systems.

In Windows 9x the registry is stored in user.dat and system.dat.

In Windows 9x the registry is stored in user.dat, system.dat and classes.dat.

In Windows NT/2000/XP files without extensions such as system, software, security, sam, default and ntuser.dat are used.

### Editing the Registry

To edit the registry in Windows 9x and Me at the run prompt type regedit. The basic hives of the registry such as HKEY_CLASSES_ROOT are displayed. When using Windows NT/2000/XP either regedit or regedt32 can be used. Regedt32 offers configuration of security permissions that regedit does not.

### Examples of Registry Editing

When Windows 98 is installed from a CD commonly at the DOS prompt D:\setup is typed. Unfortunately future configuration of the operating system prompts the user for the CD such as additional screensavers, creating a boot floppy etc. This is due to the registry storing where the setup file was executed from i.e. the D:\ drive. This can be easily overcome by editing the registry. First copy the contents of the Win98 directory of the Windows 98 CD to a specific folder on the hard drive e.g. call it Win98.