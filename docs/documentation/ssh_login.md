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
on your UCL account. Both options below have enhanced MFA requirements, so you may
be prompted more often than usual.

## Getting a Certificate

### Web Interface

You can quickly generate a new certificate without using the command line. The
Portal will generate a new key and signed certificate. This certificate will be
valid for 7 days. You can only have *one* active certificate at a time using this
method. If you need multiple certificates, please use the CLI option below.

1. Connect to the UCL VPN
2. Go to the [SSH Portal](https://ssh.condenser.arc.ucl.ac.uk)
3. Sign in with your UCL credentials (this should happen automatically)
4. Click "Generate" at the bottom of the page. If you see an "Active Key" message,
click "Revoke" to revoke it. You can then generate a new one.

### CLI

You can obtain a certificate directly through the CLI using the Vault client.
You will need to provide your own (existing) SSH key to sign. On Windows, use
[PuttyGen](https://www.puttygen.com) to create a key. On Linux/Mac OS WSL,
you can use:

``` sh
ssh-keygen -t ed25519
```

To generate a certificate:

1. Install the [Vault client](
https://developer.hashicorp.com/vault/install?product_intent=vault)
2. Set the `VAULT_ADDR` environment variable to `https://vault.arc.ucl.ac.uk`
(you may wish to add this to your local environment)
3. Connect to the ISD VPN
4. Login to Vault:

    ``` sh
    vault login -method=oidc
    ```

5. Generate a certificate:

    ``` sh
    vault write -field=signed_key ssh-environments-ingress/sign/cloud-user \
    public_key=@/home/user/.ssh/id_ed25519.pub >  ~/.ssh/id_arc.signed
    ```

(change `/home/user/.ssh/id_ed25519.pub` to the location of your own public key)

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
