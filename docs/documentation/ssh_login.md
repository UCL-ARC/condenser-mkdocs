---
title: Logging into a VM by SSH
---

# Logging into a VM by SSH

All SSH access to Condenser must be routed through our SSH bastion,
`ssh.condenser.arc.ucl.ac.uk`. This bastion does not act like a traditional
login node, and instead only allows jumping (with the use of `ProxyJump` or `-J`)
to another host on Condenser.

To access SSH, you will need to have [setup MFA](
https://www.ucl.ac.uk/isd/services/stay-secure/multi-factor-authentication-mfa)
on your UCL account. The SSH Portal has enhanced MFA requirements, so you may
be prompted more often than usual.

## Getting a Certificate

The SSH Portal will generate a new key
and signed certificate. This certificate will be valid for 7 days. You can only
have *one* active certificate at a time.

1. Connect to the UCL VPN
2. Go to the [SSH Portal](https://ssh.condenser.arc.ucl.ac.uk)
3. Sign in with your UCL credentials
4. Click "Generate" at the bottom of the page. If you see an "Active Key" message,
click "Revoke" to revoke it. You can then generate a new one.

## Connecting

### Linux/Mac OS/WSL

1. Add a Host to your `~/.ssh/config`:

    ``` sh
    Host condenser
      HostName ssh.condenser.arc.ucl.ac.uk
      User cloud-user
      CertificateFile ~/.ssh/id_arc.signed
      IdentityFile ~/.ssh/id_arc
    ```

    Ensure that `CertificateFile` matches the filename you saved your
    certificate as in [4] above, and `IdentityFile` is the private key matching
    the public key provided by the SSH Portal.

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
