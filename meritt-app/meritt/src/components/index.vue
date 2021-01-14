<template>
  <div class="wrapper">
    <div class="header header-light">
      <div class="row p-0">
        <div class="col p-0">
          <a class="left-navbar-brand" href="#">
            <img alt="Brand" src="../images/meritt.png">
          </a>
        </div>
        <div class="col p-0">
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="../images/meritt-icon.png">
          </a>
        </div>
        <div class="col p-0 text-right">
          <a class="icon" href="#">
            <span class="bedge">3</span>
            <i class="material-icons">textsms</i>
          </a>
        </div>
      </div>

    </div>
    <div class="content">
      <div class="tabs">

        <ul class="nav nav-tab">
          <li role="presentation" class="active"><a href="#/home" class="text-warpper"><div class="tab-text">Trusted Contacts &amp; Groups</div></a></li>
          <li role="presentation"><a href="#/mywallet" class="text-warpper"><div class="tab-text">My Wallet</div></a></li>
          <li role="presentation"><a href="#/myloan" class="text-warpper"><div class="tab-text">MY FA ISSUANCES</div></a></li>
          <li role="presentation"><a href="#/mytoken" class="text-warpper"><div class="tab-text">MY FA TOKENS</div></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="tab-groups">
            <table class="table info-table m-b-0">

              <tbody>
                <tr>
                  <th width="18%"><p><strong>MERITT ID:</strong></p></th>
                  <td><p>Satoshi Nakamoto</p><p><strong>Verification level: 76%</strong></p></td>
                  <td class="text-right"><a href="#"><i class="material-icons">reorder</i></a></td>
                </tr>
                <tr>
                  <th><p><strong>MERITT Score:</strong></p></th>
                  <td colspan="2"><p>2,635</p></td>
                </tr>
              </tbody>
            </table>
            <div class="row">
              <div class="col">
                <table class="table stats-table table-bordered">
                  <thead>
                    <tr>
                      <th colspan="2"><i class="material-icons">group</i> My Trusted Contacts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><p>235</p><a href="#">View trusted Contacts</a></td>
                      <td><i class="material-icons">perm_contact_calendar</i><a href="#">Add trusted Contacts</a></td>
                    </tr>
                    <tr>
                      <td><p>Invitations</p> <a href="#">(3 New)</a></td>
                      <td><a href="#">Contact you may Know</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col">
                <table class="table stats-table table-bordered">
                  <thead>
                    <tr>
                      <th colspan="2"><i class="material-icons">language</i> My Trusted Networks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><p>04</p><a href="#">View trusted networks</a></td>
                      <td><i class="material-icons">add_box</i><a href="#">Add trusted networks</a></td>
                    </tr>
                    <tr>
                      <td><p>Invitations</p> <a href="#">(1 New)</a></td>
                      <td><a href="#">Network you may Know</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  beforeCreate () {
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getContractInstance')
  }
}
</script>

<style scoped>

</style>
