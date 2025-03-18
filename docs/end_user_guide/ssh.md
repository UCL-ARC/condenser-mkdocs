---
title: Accessing a VM by SSH
---

# Accessing a VM by SSH

All SSH access to Condenser must be routed through our SSH bastion,
`ssh.condenser.arc.ucl.ac.uk`. This bastion does not act like a traditional
login node, and instead only allows jumping (with the use of `ProxyJump` or `-J`)
to another host on Condenser.

To access SSH, you will need to have [setup MFA](
https://www.ucl.ac.uk/isd/services/stay-secure/multi-factor-authentication-mfa)
on your UCL account. Both options below have enhanced MFA requirements, so you may
be prompted more often than usual.

## Getting a Certificate

You can quickly generate a new certificate through the web interface. The
Portal will generate a new key and signed certificate. This certificate will be
valid for 7 days. You can only have *one* active certificate at a time using this
method. If you need multiple certificates, please use the CLI option below.

1. Connect to the UCL VPN
2. Go to the [SSH Portal](https://ssh.condenser.arc.ucl.ac.uk)
3. Sign in with your UCL credentials (this should happen automatically)
4. Click "Generate" at the bottom of the page. If you see an "Active Key" message,
click "Revoke" to revoke it. You can then generate a new one.

## Connecting

### Linux/Mac OS/WSL

1. Add a Host to your `~/.ssh/config`. If you generated the certificate using
the SSH Portal, add:

    ``` sh
    Host condenser
      HostName ssh.condenser.arc.ucl.ac.uk
      User cloud-user
      CertificateFile ~/.ssh/id_arc.signed
      IdentityFile ~/.ssh/id_arc
    ```

    If you generated your certificate using Vault directly with your
    own key, add:

    ``` sh
    Host condenser
      HostName ssh.condenser.arc.ucl.ac.uk
      User cloud-user
      CertificateFile ~/.ssh/id_arc.signed
      IdentityFile ~/.ssh/id_ed25519
    ```

    Ensure that `CertificateFile` matches the filename you saved your
    certificate as in [5] above, and `IdentityFile` is the private key matching
    the public key provided to Vault.

2. Connect to the UCL VPN
3. Connect via SSH to your machine running on Condenser using `-J condenser`:

    ``` sh
    ssh -J condenser username@10.134.X.X
    ```

    Contact the developer responsible for the VM for the correct username and IP
    address.

!!! note
    To avoid having to use `-J condenser` every time, you can define a ProxyJump
    in your `~/.ssh/config`. For example, if your servers are `*.your-subnet.condenser.ucl.ac.uk`,
    add the following:

    ``` sh
    Host *.your-subnet.condenser.arc.ucl.ac.uk
      ProxyJump condenser
    ```

    To always jump through the bastion for these hosts.

### Windows/Putty

!!! note
    Putty is not recommended.

To connect with Putty, you will first need to convert your Key/Cert to Putty's
PPK format. To do this:

1. Open Putty Keygen
2. Import your key by clicking "Load" and selecting your *private key* (id_arc).
You may need to select "All Files" in the bottom of the dialogue box.
3. Click "Key" in the top menu and select "Add certificate to key".
4. Select "All Files" in the dialogue box and select your *signed certificate*
(id_arc.signed).
5. Click "Save private key" to save your private key in PPK format.
6. Run Pageant
7. Add your newly generated key to Pageant

To then connect via SSH:

1. Open Putty and configure your connection
2. Expand "Connection -> Proxy"
3. Set the proxy type to "SSH to proxy"
4. Set the proxy hostname to "ssh.condenser.arc.ucl.ac.uk"
