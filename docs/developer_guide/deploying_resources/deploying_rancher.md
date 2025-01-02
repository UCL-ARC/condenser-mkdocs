---
title: Deploying with the Rancher GUI
---

# Deploying with the Rancher GUI

1. Enable the UCL ISD VPN: `asa-vpn-isd.ucl.ac.uk`
2. Navigate to the Rancher GUI for Condenser: `https://rancher.condenser.arc.ucl.ac.uk`
    1. Click on **Log in with AzureAD** to log in with your UCL credentials
3. Navigate to the cluster assigned to your tenancy
    1. Begin at the Home page: `https://rancher.condenser.arc.ucl.ac.uk/dashboard/home`
    2. Open the navigation (≡) at left and click on **Virtualization Management**
    under **Global Apps**
    3. From the list of Harvester clusters, click on the name of the cluster you
    wish to access, e.g. `sl-p01`
4. Register a SSH Key
    1. On your local computer, generate a SSH key pair if you do not already have
    one with a passphrase
    2. Copy the contents of your public key onto your clipboard
    3. In the Rancher GUI, from the menu at left, select **Advanced** > **SSH Keys**
    4. On the SSH Keys page, click on **Create** in the upper right
    5. Select your tenancy namespace
    6. Enter an appropriate name for your SSH key
    7. Paste the contents of your public key into the text box under **Basics**
    8. Click **Create** in the lower right to register the SSH key
5. Launch a Virtual Machine
    1. From the menu at left, select **Virtual Machines**
    2. Click **Create** in the upper right
    3. Select your tenancy namespace
    4. Name the VM
    5. In the VM submenu, select **Networks**
    7. From the Network drop-down menu, select your tenancy network
    8. In the VM submenu, select **Volumes**
    9. Select the appropriate image (e.g., `harvester-public/almalinux-9.4-20240805`)
    10. Increase the Size to 50 GB
    10. In the VM submenu, select **Basics**
    11. Increase the **CPU** setting to 2
    12. Increase the **Memory** to 8 GiB
    13. Select your SSH Key
    14. Click **Create** in the lower right to launch the VM

        !!! note
            Occasionally the VM creation form will clear entries even though they
            appear to have been properly configured. This will cause errors to appear
            when you click **Create**. Re-enter them, wait for the **Create** button
            to reappear, and try again. It sometimes helps to focus the cursor out
            of the form fields after you configure a setting.

    15. To save a VM configuration as a template:
        1. From the menu at left, select **Virtual Machines**
        2. Tick the box next to the VM
        3. From the menu at right (⋮), select **Generate Template**
        4. Name the template
        5. To start a VM from a template, omit steps 5.5-5.13. Instead tick the
        **Use VM Template** box and select the appropriate template.
6. Log in to the VM
    1. From the menu at left, select **Virtual Machines**
    2. Identify the VM that you just launched in the list
    3. Wait for the IP address to appear, then copy it (the IP address will begin
    with `10.134`)
    4. Follow the instructions to [access the VM with SSH](../../end_user_guide/ssh.md)

7. Terminate a VM
    1. From the menu at left, select **Virtual Machines**
    2. Tick the box next to the VM
    3. Click **Delete** at the top of the table of VMs
